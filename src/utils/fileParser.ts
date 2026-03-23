// src/utils/fileParser.ts

import fs from 'fs';
import pdf from 'pdf-parse';
import docx from 'docx-parser';
import xlsx from 'xlsx';
import jsonfile from 'jsonfile';

// Function to parse PDF files
export const parsePDF = async (filePath) => {
    const dataBuffer = fs.readFileSync(filePath);
    return await pdf(dataBuffer);
};

// Function to parse DOCX files
export const parseDOCX = async (filePath) => {
    return new Promise((resolve, reject) => {
        docx.parseDocx(filePath, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};

// Function to parse XLSX files
export const parseXLSX = (filePath) => {
    const workbook = xlsx.readFile(filePath);
    return workbook.SheetNames.reduce((data, sheet) => {
        return {...data, [sheet]: xlsx.utils.sheet_to_json(workbook.Sheets[sheet])};
    }, {});
};

// Function to read JSON files
export const parseJSON = async (filePath) => {
    return await jsonfile.readFile(filePath);
};

// Function to read TXT files
export const parseTXT = (filePath) => {
    return fs.readFileSync(filePath, 'utf8');
};

// Function to read MD files
export const parseMD = (filePath) => {
    return fs.readFileSync(filePath, 'utf8');
};