// src/services/FileService.js
import * as XLSX from 'xlsx';
import Papa from 'papaparse';

export function processFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      if (file.type.includes('csv')) {
        resolve(processCSV(content));
      } else if (file.type.includes('spreadsheetml') || file.name.endsWith('.xlsx')) {
        resolve(processExcel(content));
      }
    };
    reader.onerror = (error) => reject(error);

    if (file.type.includes('csv')) {
      reader.readAsText(file);
    } else {
      reader.readAsBinaryString(file);
    }
  });
}

function processCSV(data) {
  return new Promise((resolve) => {
    Papa.parse(data, {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        resolve(results.data);
      }
    });
  });
}

function processExcel(data) {
  const workbook = XLSX.read(data, { type: 'binary' });
  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];
  return XLSX.utils.sheet_to_json(worksheet, { header: 1 });
}
