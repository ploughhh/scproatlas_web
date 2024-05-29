import pandas as pd
import scanpy as sc
import matplotlib.pyplot as plt
import seaborn as sns
import os
from tqdm import tqdm

def find_files(directory, substring, extension):
    # 存储符合条件的文件路径
    matching_files = []
    # 遍历给定目录及其所有子目录
    for root, dirs, files in os.walk(directory):
        # 检查每个文件
        for file in files:
            # 检查文件名是否包含特定子字符串并且以特定扩展名结尾
            if substring in file and file.endswith(extension):
                # 如果符合条件，添加完整路径到列表
                matching_files.append(os.path.join(root, file))
    return matching_files


save_path = '/data/twang15/spatial_protein/CODEX_data/hubmap/multi_inte/large_intestine'
os.makedirs(save_path, exist_ok=True)
# tissues = adata.obs['Tissue'].drop_duplicates().tolist()
files = find_files('/data/twang15/spatial_protein/CODEX_data/hubmap/integrated/large_intestine', 'integrated', '.h5ad')
files.remove('/data/twang15/spatial_protein/CODEX_data/hubmap/integrated/large_intestine/combined_protein_integrated.h5ad')

for file in tqdm(files):
    tissue = file.split('/')[8].replace('_integrated_protein.h5ad', '')
    tmp = sc.read_h5ad(file)
    tmp = sc.read_h5ad(files[0])
    sc.pp.neighbors(tmp, n_neighbors=300, n_pcs=20)
    sc.tl.umap(tmp)
    sc.pl.umap(tmp, color=['cell_type'], show=False)
    os.makedirs(f'{save_path}/{tissue}/', exist_ok=True)
    plt.savefig(f'{save_path}/{tissue}/protein_celltype_umap.png', bbox_inches='tight')
    sc.pl.umap(tmp, color=['neighborhood10'], show=False)
    plt.savefig(f'{save_path}/{tissue}/protein_neighbor_umap.png', bbox_inches='tight')