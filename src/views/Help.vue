<template>
  <el-container>
    <el-header>
      <Menus />
    </el-header>
    <el-main style="margin-right: auto;  margin-left: auto; width: 1600px;">
      <h1>Introduction</h1>
      <p style="padding-top: 1%;line-height: 1.7;">
        Aging is the gradual functional deterioration influenced by interconnected factors. Hallmarks have been proposed as common denominators for the underlying mechanism of aging. These hallmarks are demonstrated to be remarkable conservation across multiple species. For instance, the protein kinase mechanistic target of rapamycin (mTOR) is a conserved regulator of aging across multiple species. Activation of mTOR has been correlated with aging and longevity in yeast, C. elegans, D. melanogaster, mice, monkeys, and humans. Additionally, Rapamycin's ability to extend lifespan by inhibiting the TOR pathway was initially discovered in yeast. Then, extensive experiments in model organisms showed mTOR is sensitivity to Rapamycins treatment. Furthermore, the interaction between gut microbiota composition, mTOR, and lifespan has been studied, shedding light on the effects of gut microbiota on longevity through the mTOR pathway. Understanding the regulation of aging factors and their relationships across species can facilitate the translation of anti-aging drug development from model organisms to humans. To this end, we developed AgeAnnoMO, a comprehensive knowledgebase that includes genetic and mitochondrial genomes, transcriptomes, epigenomes, proteomes, immunomes, microbiomes, and metabolomes from 48 representative species in aging and longevity research. AgeAnnoMO aims to provide comprehensive characterization and multiple regulators of aging across species based on omics data.  
      </p>
      <el-image style="width:100%; height: 100%;" src="images/help/index.png" fit="fill"></el-image>
      <p style="text-align: center;font-size: 18px;margin-bottom: 20px;">
        Figure 1. Database content and construction of AgeAnnoMO. Public resources and the aging-related multi-omics datasets were collected for the aging-related functional annotations. For each data modality, we performed functional annotations to characterize the aging hallmarks. Users can browse the functional annotations by each aging hallmark. Users can also browse the datasets by species. AgeAnnoMO also supports searching and downloading information on aging-related genes, mitochondrial genes, proteins, TCR/BCR sequences, metabolites, and microbiotas.
      </p>
    <h1>Database Content</h1>
        <el-collapse v-model="activeName" accordion>
     <el-collapse-item name="120">
       <template #title><p>Genomic instability module</p></template>
      <p>Genomic instability has been identified as a cause of aging since the discovery (22). In the aging process, DNA is constantly exposed to endogenous and exogenous factors that can cause damage, such as reactive oxygen species, radiation, and chemical agents. The aged cells are less efficient at repairing DNA damage, leading to the accumulation of mutations, and altered gene expression. Thus, in this module, we annotated the somatic mutations of aging-related genes in multiple species by using bulk-RNA sequencing data. Total 14 datasets with 11 species and 208 samples are included. This module also provides the metadata of the aging datasets, aging-related differentially expressed genes, and whether this gene shows specificity among species. Moreover, we identified the mutations that may potentially influence the gene expression by using eQTL analysis.</p>
      <el-image class='imageCon' src="images/help/genomic.png" fit="fill"></el-image>
     </el-collapse-item>

     <el-collapse-item name="121">
       <template #title><p>Epigenetic alteration module</p></template>
       <p>Epigenetics encompasses the reversible heritable processes that occur independently of changes in the DNA sequence. Epigenetic alterations, such as DNA methylation, play significant roles in the aging process. During aging, global DNA methylation patterns tend to change, with some regions of the genome becoming more methylated while others become less methylated. These changes in DNA methylation can impact gene expression and contribute to age-related changes in cellular function. In this module, we identified the aging-related differential methylation regions (DMR) using DSS and ChAMP to identify aging-related hypermethylation and hypomethylation. Then, we performed the enrichment analysis of DMR genes by using clusterProfiler to identify biology pathways that affected by aging-related DMRs.
        In this module, after choosing the dataset of interest, users can explore and search for the gene symbol and the chromosome of interests. AgeAnnoMO feeds back the information on the searched gene and the visualized methylation status compared between different age groups.
       </p>
      <el-image class='imageCon' src="images/help/epigenetic.png" fit="fill"></el-image>
     </el-collapse-item>

     <el-collapse-item name="123">
       <template #title><p>Loss of proteostasis module</p></template>
      <p>
        Protein alteration and loss of proteostasis in aging can result in the accumulation of damaged proteins, leading to impaired cellular function, increased stress, and age-related diseases. The loss of proteostasis encompasses various aspects, such as alteration of the protein abundance, protein misfolding, and disruption of the protein interactions. Here, we identified the aging-related proteins using differential protein abundance analysis and correlation analysis. We also identified the enriched pathways and the intricate interaction network related to the differential proteins in aging. In this module, users can browse the metadata, differentially expressed proteins, age-correlated proteins, aging-related protein interaction network, and enriched pathways. Users can also search for the protein of interest. We found that there are multiple aging-related proteins show conservation across species.
      </p>
      <el-image class='imageCon' src="images/help/proteostasis1.png" fit="fill"></el-image>
      <el-image class='imageCon' src="images/help/proteostasis2.png" fit="fill"></el-image>
     </el-collapse-item>

     <el-collapse-item name="124">
       <template #title><p>Aging-related immune repertoire module</p></template>
      <p>
        The immune function tends to be deteriorated along with the aging process (37). For example, extensive lines of evidence indicate the decreased clonal diversity of TCR and BCR repertoires in the elder individuals. Loss of T cell abundance and decrease of the TCR repertoire may lead to impaired immunity to bacterial infections, poor response to vaccination, and poor control of autoreactive T clones and autoimmunity. Identification of the characteristics of aged immune profiles can be helpful to understand the immunity aging, and to represent a potential interventional target. In this module, we first compared the statistical information of the CDR3 sequences between age groups, such as CDR3 sequence length distribution. Then, this module provides detailed information of the age-specific TCR/BCR sequence, including the antigen specificity of the age-specific TCRs, the comparison of V-J CDR3 amino acid sequence, V gene, D gene, J gene, and its ratio in the corresponding repertoire. Due to the high diversity of TCR/BCR sequence, AgeAnnoMO also allow users to search their interested CDR3 sequence by using incomplete fragments, and the database will return all related sequences that contain the query sequence.
      </p>
      <el-image class='imageCon' src="images/help/immune1.png" fit="fill"></el-image>
      <el-image class='imageCon' src="images/help/immune2.png" fit="fill"></el-image>
     </el-collapse-item>
     <el-collapse-item name="125">
       <template #title><p>Dysregulated metabolism in aging</p></template>
      <p>
        Deregulated nutrient-sensing is one of known hallmarks of aging. The nutrient-sensing is particularly influenced by the metabolism. The relationship between metabolism and nutrition becomes even more crucial in the context of aging. Extensive studies have demonstrated that dysregulated metabolism, such as altered metabolic abundance and metabolic pathways, can contribute to the aging process. Thus, this module provides the aging-related metabolites, metabolite interaction network and the metabolic pathways of aging-related metabolites across 15 datasets. For each dataset, users can browse the annotation information of the aging-related metabolites, including the metabolite name, PubChem ID, molecular formula, molecular weight, the image of 2D structure, and the comparison statistics. We also annotated aging-related metabolites with the MetaboAgeDB. MetaboAgeDB is a human aging-related metabolome database. Users can also check the detailed information on PubChem database through the ‘Detail’ link. Users can search for the metabolite name of interests. The circular plot shows the interaction between aging-related metabolites. The nodes indicate the name of metabolites, and the lines indicates the correlation coefficient between metabolites. Moreover, this module also provides the enriched metabolic pathways for aging-related metabolites.
      </p>
      <el-image class='imageCon' src="images/help/metabolism.png" fit="fill"></el-image>
     </el-collapse-item>
     <el-collapse-item name="126">
       <template #title><p>Mitochondrial dysfunction module</p></template>
      <p>
        Mitochondrial dysfunction is heavily implicated in the aging process across multiple species (55). Elderly individuals have higher levels of somatic mutations in mitochondrial DNA (mtDNA) that cause the deficiency in multiple tissues. Currently, studies in various model organisms have yielded inconsistent results, highlighting the incomplete understanding of the intricate role of mtDNA mutations in regulating aging. This module was designed to identify somatic mutations in mtDNA from samples with different age. Users can browse the detailed information of mtDNA mutations, including the location of mutation sites, mutation type, mtDNA type, and the visualization in UCSC genome browser. In this module, users can also search the mitochondrial gene of interest by using gene symbol. This module will help users identify potential mutations on mtDNA in different ages across species.
      </p>
      <el-image class='imageCon' src="images/help/mitochondrial.png" fit="fill"></el-image>
     </el-collapse-item>
     <el-collapse-item name="127">
       <template #title><p>Altered intercellular communication module</p></template>
      <p>
        Fine-tuned communication between cells is important for the homeostasis of a healthy organism, and the alteration of the communication have been proved to be associated with aging and aging-related diseases. To systematically identify the aging-related intercellular communications, we collected 34 single-cell RNA sequencing datasets that encompassing more than 1 million cells. For each dataset, this module provides the metadata and the cell map for both tSNE and UMAP methods for tissue-specific cell cluster visualization. AgeAnnoMO also provides visualization of cells from different age groups. Users can visualize the cell distribution between different age groups. Then, the table of aging-related differential expressed genes was developed to compare the expression of aging-related genes in different age groups. AgeAnnoMO allows users to search the gene of interests based on gene symbol, age group, or cell type. This result also included the information on whether this gene is cell-type, tissue- or species-specific. Moreover, to better annotate the function of the aging-related differential expressed genes, we identified cell-cell interaction network using CellphoneDB v2.0. For each age group, AgeAnnoMO provides interactive network for visualization. In the network, nodes with different colors represent different cell types, while edges represent L-R interactions between the two cell types. Users can obtain detailed interactions related to on cell type by clicking the node. Users can also obtain the interactions between two certain cell types by clicking the edges.
      </p>
      <el-image class='imageCon' src="images/help/intercellular.png" fit="fill"></el-image>
      <el-image class='imageCon' src="images/help/intercellular2.png" fit="fill"></el-image>
      <el-image class='imageCon' src="images/help/intercellular3.png" fit="fill"></el-image>
     </el-collapse-item>
     <el-collapse-item name="128">
       <template #title><p>Dysbiosis in aging module</p></template>
      <p>
        Dysbiosis terms of an imbalance or maladaptation of microbiome inside or on the body that can potentially affect the healthy. The alteration of the microbiome is particularly relevant in the aging process because it has the potential to influence the risk of multiple diseases, such as cognitive impairments, diabetes, and stroke, all of which exhibit an increased incidence with advancing age. In this module, we identified the aging-related microbiome using 16S ribosomal RNA (rRNA) sequencing data across multiple species. For each dataset, AgeAnnoMO provides the microbiome community composition and abundance between different age groups, the alpha and beta diversity between different age groups, and the aging-related microbiota using differential and correlation analysis. In this module, users can browse the relative abundance of aging-related microbiomes, and the microbiome diversity in different age groups. AgeAnnoMO also allows the users to search the microbiome of interests by using the microbiota name.
      </p>
      <el-image class='imageCon' src="images/help/dysbiosis.png" fit="fill"></el-image>
      <el-image class='imageCon' src="images/help/dysbiosis2.png" fit="fill"></el-image>
      <el-image class='imageCon' src="images/help/dysbiosis3.png" fit="fill"></el-image>
     </el-collapse-item>
     <el-collapse-item name="129">
       <template #title><p>Integration of aging hallmarks module</p></template>
      <p>
        The hallmarks of aging are demonstrated to be strongly interconnected with each other. For example, the gut microbiota is identified to regulate specific gene expression and metabolites in the aging process. Additionally, proteins are responsible for the synthesis, transport, and breakdown of metabolites, while metabolites can also modulate the activity and function of proteins. The interplay between hallmarks orchestrates the complex process of aging in organisms. In this module, we extracted the aging-related microbiota-gene interactions from gutMGene database and previous studies. Moreover, this module also provides the aging-related metabolite-protein interaction from HMDB database. In this module, users can browse the detailed information of gene-microbiota interactions, and the detailed information of aging-related protein-metabolite interactions. AgeAnnoMO also allows users to search these tables using the microbiota name, associated genes, protein name, and metabolite name.
      </p>
      <el-image class='imageCon' src="images/help/hallmarks.png" fit="fill"></el-image>
     </el-collapse-item>
     <el-collapse-item name="130">
       <template #title><p>Anti-aging interventions module</p></template>
      <p>
        AgeAnnoMO provides 87 anti-aging interventions that targeting on aging hallmarks collecting from previous studies. The used model organism, data type (tissue data or cell line), targeted hallmarks, the name of interventions, the targeted genes or pathways, and the effect on aging and lifespan is provided in this module. Users can search by species of the model organism, the hallmarks type, and the name of interventions of interests.
      </p>
      <el-image class='imageCon' src="images/help/interventions.png" fit="fill"></el-image>
     </el-collapse-item>
     <el-collapse-item name="131">
       <template #title><p>Lifespan regulator module</p></template>
      <p>
        The lifespan of different species can vary by approximately 100-fold. Previous studies suggested that the underlying mechanism of large changes in lifespan across multiple species can be identified using comparative biology. In this module, we performed extensive comparative transcriptomic analysis to identify the genes related to longevity and lifespan across 26 species. This module provides 1,888 genes that shows significant correlation with the maximum lifespan across multiple species. Users can obtain the correlation between gene and the maximum lifespan. Users can input the gene symbols of their interests to visualize the correlation of the gene expression and the maximum lifespan.
      </p>
      <el-image class='imageCon' src="images/help/hallmarks.png" fit="fill"></el-image>
     </el-collapse-item>
     <el-collapse-item name="132">
       <template #title><p>Anti-aging interventions module</p></template>
      <p>
        AgeAnnoMO provides 87 anti-aging interventions that targeting on aging hallmarks collecting from previous studies. The used model organism, data type (tissue data or cell line), targeted hallmarks, the name of interventions, the targeted genes or pathways, and the effect on aging and lifespan is provided in this module. Users can search by species of the model organism, the hallmarks type, and the name of interventions of interests.
      </p>
      <el-image class='imageCon' src="images/help/interventions.png" fit="fill"></el-image>
     </el-collapse-item>
     <el-collapse-item name="133">
       <template #title><p>Browse by species</p></template>
      <p>
        AgeAnnoMO also allows users to browse the datasets by choosing species type. As shown in the following figure, users can choose the species of interests, and the database will return the corresponded datasets related to this species. The dataset ID, species type, tissue, project ID of the data source, and the sequencing technique of the queried dataset are provided in the table. Moreover, users can browse the detailed result page of the dataset of interests by clicking the ‘Detail’ link.
      </p>
      <el-image class='imageCon' src="images/help/species.png" fit="fill"></el-image>
     </el-collapse-item>
     <el-collapse-item name="134">
       <template #title><p>Search Function in AgeAnnoMO</p></template>
      <p>
        The search function of AgeAnnoMO enables users to explore various aspects, including microbiotas, proteins, metabolites, genes, mitochondrial genes, and TCR sequences of interest. To start the search, users should select their preferred data type and species. Subsequently, they can input or select the symbols or names representing the genes, proteins, metabolites, or microbiotas. The database then retrieves the datasets containing the queried subject. By clicking on the symbols of names, users can access detailed information and all related results in the database regarding the specific query. Furthermore, users can also access the result page of the dataset containing the queried subject by clicking on the 'Result' link. This function allows for a comprehensive and efficient exploration of the desired data within AgeAnnoMO.
      </p>
      <el-image class='imageCon' src="images/help/interventions.png" fit="fill"></el-image>
     </el-collapse-item>
     <el-collapse-item name="135">
       <template #title><p>Browse the datasets used in AgeAnnoMO</p></template>
      <el-image class='imageCon' src="images/help/datasets.png" fit="fill"></el-image>
     </el-collapse-item>
     
     <el-collapse-item name="136">
       <template #title><p>Download Function</p></template>
      <p>Users can download the related files in the github project (https://github.com/vikkihuangkexin/AgeAnnoMO).</p>
      <el-image class='imageCon' src="images/help/download.png" fit="fill"></el-image>
    </el-collapse-item>
        </el-collapse>
    </el-main>
  </el-container>
</template>

<script setup>
import Menus from '../layout/menu-item'
import { ref } from 'vue'

const activeName = ref()
// const webinter = ref('')
// const tableData = [
//   {
//     Tissue: 'Pancreas',
//     Publication: 'Single-Nucleus and In Situ RNA–Sequencing Reveal Cell Topographies in the Human Pancreas',
//     Year: '2020',
//     PMID: '33212097',
//     Tech: '10X',
//     Datalink: 'http://singlecell.charite.de/cellbrowser/pancreas/',
//     Database: 'UCSC'
//   },
//   {
//     Acession: 'GSE165659',
//     Tissue: 'Pancreas',
//     Publication: 'A single-cell atlas of chromatin accessibility in the human genome',
//     Year: '2021',
//     PMID: '34774128',
//     Tech: 'Single nucleus ATAC-seq',
//     Datalink: 'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE165659',
//     Database: 'GEO'
//   },
//   {
//     Acession: 'E-MTAB-7316',
//     Tissue: 'Retina',
//     Publication: 'A single-cell transcriptome atlas of the adult human retina',
//     Year: '2019',
//     PMID: '31436334',
//     Tech: '10X',
//     Datalink: 'https://www.ebi.ac.uk/arrayexpress/experiments/E-MTAB-7316/',
//     Database: 'ArrayExpress'
//   },
//   {
//     Acession: 'GSE134355',
//     Tissue: 'Kidney',
//     Publication: 'Construction of a human cell landscape at single cell level',
//     Year: '2020',
//     PMID: '32214235',
//     Tech: 'Microwell-seq',
//     Datalink: 'http://bis.zju.edu.cn/HCL/dpline.html?tissue=Kidney',
//     Database: 'GEO/Human Cell Landscape'
//   },
//   {
//     Acession: 'GSE16873',
//     Tissue: 'Blood',
//     Publication: 'Single-cell RNA sequencing of peripheral blood mononuclear cells from acute Kawasaki disease patients',
//     Year: '2021',
//     PMID: '34521850',
//     Tech: '10X',
//     Datalink: 'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE168732',
//     Database: 'GEO'
//   },
//   {
//     Acession: 'GSE138266',
//     Tissue: 'Blood',
//     Publication: 'Integrated single cell analysis of blood and cerebrospinal fluid leukocytes in multiple sclerosis',
//     Year: '2020',
//     PMID: '31937773',
//     Tech: '10X',
//     Datalink: 'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE138266',
//     Database: 'GEO'
//   },
//   {
//     Tissue: 'Blood',
//     Publication: 'Single-cell transcriptomics reveals expansion of cytotoxic CD4 T cells in supercentenarians',
//     Year: '2019',
//     PMID: '31719197',
//     Tech: '10X',
//     Datalink: 'http://gerg.gsc.riken.jp/SC2018/'
//   },
//   {
//     Acession: 'GSE138266',
//     Tissue: 'Skin',
//     Publication: 'A Single-Cell Transcriptomic Atlas of Human Skin Aging',
//     Year: '2020',
//     PMID: '33238152',
//     Tech: '10X',
//     Datalink: 'https://ngdc.cncb.ac.cn/gsa-human/browse/HRA000395',
//     Database: 'NGDC'
//   },
//   {
//     Acession: 'GSE165659',
//     Tissue: 'Skin',
//     Publication: 'A single-cell atlas of chromatin accessibility in the human genome',
//     Year: '2021',
//     PMID: '34774128',
//     Tech: 'Single nucleus ATAC-seq',
//     Datalink: 'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE165659',
//     Database: 'GEO'
//   },
//   {
//     Acession: 'PRJNA434002',
//     Tissue: 'Brain',
//     Publication: 'Single-cell genomics identifies cell type–specific molecular changes in autism',
//     Year: '2019',
//     PMID: '31097668',
//     Tech: '10X',
//     Datalink: 'https://www.ncbi.nlm.nih.gov/bioproject/?term=PRJNA434002',
//     Database: 'NCBI'
//   },
//   {
//     Acession: 'GSE144136',
//     Tissue: 'Brain',
//     Publication: 'Single-nucleus transcriptomics of the prefrontal cortex in major depressive disorder implicates oligodendrocyte precursor cells and excitatory neurons',
//     Year: '2019',
//     PMID: '32341540',
//     Tech: '10X',
//     Datalink: 'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE144136',
//     Database: 'GEO'
//   },
//   {
//     Acession: 'syn18485175',
//     Tissue: 'Brain',
//     Publication: 'Single-cell transcriptomic analysis of Alzheimer’s disease',
//     Year: '2019',
//     PMID: '31042697',
//     Tech: '10X',
//     Datalink: 'https://www.synapse.org/#!Synapse:syn18485175',
//     Database: 'SYNAPSE-AD Knowledge Portal'
//   },
//   {
//     Acession: 'GSE184462',
//     Tissue: 'Brain',
//     Publication: 'A single-cell atlas of chromatin accessibility in the human genome',
//     Year: '2021',
//     PMID: '31042697',
//     Tech: 'Single nucleus ATAC-seq',
//     Datalink: 'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE184462',
//     Database: 'GEO'
//   },
//   {
//     Acession: 'GSE174367',
//     Tissue: 'Brain',
//     Publication: 'Single-nucleus chromatin accessibility and transcriptomic characterization of Alzheimer’s Disease',
//     Year: '2021',
//     PMID: '34239132',
//     Tech: 'Single nucleus ATAC-seq',
//     Datalink: 'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE174367',
//     Database: 'GEO'
//   },
//   {
//     Acession: 'GSE147672',
//     Tissue: 'Brain',
//     Publication: 'Single-cell epigenomic analyses implicate candidate causal variants at inherited risk loci for Alzheimer’s and Parkinson’s diseases',
//     Year: '2020',
//     PMID: '33106633',
//     Tech: 'Single nucleus ATAC-seq',
//     Datalink: 'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE147672',
//     Database: 'GEO'
//   },
//   {
//     Acession: 'GSE143704',
//     Tissue: 'Skeletal muscle',
//     Publication: 'A reference single-cell transcriptomic atlas of human skeletal muscle tissue reveals bifurcated muscle stem cell populations',
//     Year: '2020',
//     PMID: '32624006',
//     Tech: '10X',
//     Datalink: 'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE143704',
//     Database: 'GEO'
//   },
//   {
//     Acession: 'GSE165659',
//     Tissue: 'Skeletal muscle',
//     Publication: 'A single-cell atlas of chromatin accessibility in the human genome',
//     Year: '2021',
//     PMID: '34774128',
//     Tech: 'Single nucleus ATAC-seq',
//     Datalink: 'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE165659',
//     Database: 'GEO'
//   },
//   {
//     Acession: 'phs001750.v1.p1/GSE122960',
//     Tissue: 'Lung',
//     Publication: 'Single-Cell Transcriptomic Analysis of Human Lung Provides Insights into the Pathobiology of Pulmonary Fibrosis',
//     Year: '2018',
//     PMID: '30554520',
//     Tech: '10X',
//     Datalink: 'https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/study.cgi?study_id=phs001750.v1.p1',
//     Database: 'GEO/dbGAP'
//   },
//   {
//     Acession: 'E-MTAB-6149',
//     Tissue: 'Lung',
//     Publication: 'Phenotype molding of stromal cells in the lung tumor microenvironment',
//     Year: '2018',
//     PMID: '29988129',
//     Tech: '10X',
//     Datalink: 'https://www.ebi.ac.uk/arrayexpress/experiments/E-MTAB-6149/',
//     Database: 'ArrayExpress'
//   },
//   {
//     Acession: 'GSE184462',
//     Tissue: 'Lung',
//     Publication: 'A single-cell atlas of chromatin accessibility in the human genome',
//     Year: '2021',
//     PMID: '34774128',
//     Tech: 'Single nucleus ATAC-seq',
//     Datalink: 'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE184462',
//     Database: 'GEO'
//   },
//   {
//     Acession: 'phs001818.v1.p1',
//     Tissue: 'Stomach',
//     Publication: 'Single-Cell Genomic Characterization Reveals the Cellular Reprogramming of the Gastric Tumor Microenvironment',
//     Year: '2020',
//     PMID: '32060101',
//     Tech: '10X',
//     Datalink: 'https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/study.cgi?study_id=phs001818.v1.p1',
//     Database: 'dbGAP'
//   },
//   {
//     Acession: 'HRA000051',
//     Tissue: 'Stomach',
//     Publication: 'Dissecting transcriptional heterogeneity in primary gastric adenocarcinoma by single cell RNA sequencing',
//     Year: '2021',
//     PMID: '32532891',
//     Tech: '10X',
//     Datalink: 'https://ngdc.cncb.ac.cn/gsa-human/browse/HRA000051',
//     Database: 'GSA'
//   },
//   {
//     Acession: 'GSE134355',
//     Tissue: 'Stomach',
//     Publication: 'Construction of a human cell landscape at single cell level',
//     Year: '2020',
//     PMID: '32214235',
//     Tech: 'Microwell-seq',
//     Datalink: 'http://bis.zju.edu.cn/HCL/dpline.html?tissue=Stomach',
//     Database: 'GEO/Human Cell Landscape'
//   },
//   {
//     Acession: 'GSE165659',
//     Tissue: 'Stomach',
//     Publication: 'A single-cell atlas of chromatin accessibility in the human genome',
//     Year: '2021',
//     PMID: '34774128',
//     Tech: 'Single nucleus ATAC-seq',
//     Datalink: 'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE165659',
//     Database: 'GEO'
//   },
//   {
//     Acession: 'GSE124395',
//     Tissue: 'Liver',
//     Publication: 'A human liver cell atlas reveals heterogeneity and epithelial progenitors',
//     Year: '2019',
//     PMID: '31292543',
//     Tech: 'mCEL-Seq2',
//     Datalink: 'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE124395',
//     Database: 'GEO'
//   },
//   {
//     Acession: 'PRJEB31843',
//     Tissue: 'Oesphagus',
//     Publication: 'scRNA-seq assessment of the human lung, spleen, and esophagus tissue stability after cold preservation',
//     Year: '2020',
//     PMID: '31892341',
//     Tech: '10X',
//     Datalink: 'https://data.humancellatlas.org/explore/projects/c4077b3c-5c98-4d26-a614-246d12c2e5d7',
//     Database: 'HCA'
//   },
//   {
//     Acession: 'GSE165659',
//     Tissue: 'Oesphagus',
//     Publication: 'A single-cell atlas of chromatin accessibility in the human genome',
//     Year: '2021',
//     PMID: '34774128',
//     Tech: 'Single nucleus ATAC-seq',
//     Datalink: 'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE165659',
//     Database: 'GEO'
//   },
//   {
//     Tissue: 'Intestine',
//     Publication: 'Cells of the human intestinal tract mapped across space and time',
//     Year: '2021',
//     PMID: '34497389',
//     Tech: '10X',
//     Datalink: 'https://www.gutcellatlas.org/',
//     Database: 'GutCellSurvey'
//   },
//   {
//     Acession: 'PRJNA662018',
//     Tissue: 'Bladder',
//     Publication: 'Single-cell RNA sequencing highlights the role of inflammatory cancer-associated fibroblasts in bladder urothelial carcinoma',
//     Year: '2021',
//     PMID: '33033240',
//     Tech: '10X',
//     Datalink: 'https://www.ncbi.nlm.nih.gov/bioproject/?term=PRJNA662018',
//     Database: 'SRA'
//   },
//   {
//     Acession: 'GSE129845',
//     Tissue: 'Bladder',
//     Publication: 'Single-Cell Transcriptomic Map of the Human and Mouse Bladders',
//     Year: '2019',
//     PMID: '31462402',
//     Tech: '10X',
//     Datalink: 'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE129845',
//     Database: 'SRA'
//   },
//   {
//     Acession: 'GSE134355',
//     Tissue: 'Bladder',
//     Publication: 'Construction of a human cell landscape at single cell level',
//     Year: '2020',
//     PMID: '32214235',
//     Tech: 'Microwell-seq',
//     Datalink: 'http://bis.zju.edu.cn/HCL/dpline.html?tissue=Bladder',
//     Database: 'GEO/Human Cell Landscape'
//   },
//   {
//     Acession: 'GSE120221',
//     Tissue: 'Bone marrow',
//     Publication: 'Human bone marrow assessment by single-cell RNA sequencing, mass cytometry, and flow cytometry',
//     Year: '2018',
//     PMID: '30518681',
//     Tech: '10X',
//     Datalink: 'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE120221',
//     Database: 'GEO/Human Cell Landscape'
//   },
//   {
//     Acession: 'GSE134355',
//     Tissue: 'Bone marrow',
//     Publication: 'Construction of a human cell landscape at single cell level',
//     Year: '2020',
//     PMID: '32214235',
//     Tech: 'Microwell-seq',
//     Datalink: 'http://bis.zju.edu.cn/HCL/dpline.html?tissue=Bone-Marrow',
//     Database: 'GEO/Human Cell Landscape'
//   },
//   {
//     Acession: 'GSE134355',
//     Tissue: 'Prostate',
//     Publication: 'Construction of a human cell landscape at single cell level',
//     Year: '2020',
//     PMID: '32214235',
//     Tech: 'Microwell-seq',
//     Datalink: 'http://bis.zju.edu.cn/HCL/dpline.html?tissue=Prostate',
//     Database: 'GEO/Human Cell Landscape'
//   },
//   {
//     Acession: 'GSE150692',
//     Tissue: 'Prostate',
//     Publication: 'A single-cell atlas of the mouse and human prostate reveals heterogeneity and conservation of epithelial progenitors',
//     Year: '2020',
//     PMID: '32915138',
//     Tech: '10X',
//     Datalink: 'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE150692',
//     Database: 'GEO'
//   },
//   {
//     Acession: 'GSE149512',
//     Tissue: 'Testis',
//     Publication: 'Single-cell analysis of developing and azoospermia human testicles reveals central role of Sertoli cells',
//     Year: '2020',
//     PMID: '33173058',
//     Tech: '10X/BD Rhapsody',
//     Datalink: 'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE149512',
//     Database: 'GEO'
//   },
//   {
//     Acession: 'GSE124263',
//     Tissue: 'Testis',
//     Publication: 'Single-cell analysis of the developing human testis reveals somatic niche cell specification and fetal germline stem cell establishment',
//     Year: '2021',
//     PMID: '33453151',
//     Tech: '10X/BD Rhapsody',
//     Datalink: 'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE143356',
//     Database: 'GEO'
//   },
//   {
//     Acession: 'PRJEB39602',
//     Tissue: 'Heart',
//     Publication: 'Cells of the adult human heart',
//     Year: '2020',
//     PMID: '32971526',
//     Tech: '10X',
//     Datalink: 'https://www.ebi.ac.uk/ena/browser/view/PRJEB39602?show=reads',
//     Database: 'ENA'
//   },
//   {
//     Acession: 'GSE165659',
//     Tissue: 'Colon - Transverse',
//     Publication: 'A single-cell atlas of chromatin accessibility in the human genome',
//     Year: '2021',
//     PMID: '34774128',
//     Tech: 'Single nucleus ATAC-seq',
//     Datalink: 'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE165659',
//     Database: 'GEO'
//   },
//   {
//     Acession: 'GSE165659',
//     Tissue: 'Colon - Sigmoid',
//     Publication: 'A single-cell atlas of chromatin accessibility in the human genome',
//     Year: '2021',
//     PMID: '34774128',
//     Tech: 'Single nucleus ATAC-seq',
//     Datalink: 'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE165659',
//     Database: 'GEO'
//   },
//   {
//     Acession: 'GSE165659',
//     Tissue: 'Artery',
//     Publication: 'A single-cell atlas of chromatin accessibility in the human genome',
//     Year: '2021',
//     PMID: '34774128',
//     Tech: 'Single nucleus ATAC-seq',
//     Datalink: 'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE165659',
//     Database: 'GEO'
//   },
//   {
//     Acession: 'GSE165659',
//     Tissue: 'Adipose',
//     Publication: 'A single-cell atlas of chromatin accessibility in the human genome',
//     Year: '2021',
//     PMID: '34774128',
//     Tech: 'Single nucleus ATAC-seq',
//     Datalink: 'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE165659',
//     Database: 'GEO'
//   }
// ]

</script>

<style>
  p {
    font-size: 20px;
    font-family: "Arial";
    text-align: justify;
  }
  .imageCon{
    display: flex;
    justify-content: center; /* 水平居中对齐 */
    align-items: center; /* 垂直居中对齐 */
    width: 80%;
    height: 80%;
  }
  .title {
    background-color: #248067;
    text-align: center;
    color: white;
    width: 1700;
  }
  .el-collapse-item__header {
    font-size: 22px;
    color: white;
    background-color: #248067;
    font-family: "Arial";
    text-align: justify;
  }
  .el-table {
    color: black;
    font-size: 16px;
    font-family: "Arial";
  }
</style>
