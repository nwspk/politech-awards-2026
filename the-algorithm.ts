import * as fs from 'fs';
import csv from 'csv-parser';

interface Candidate {
    url: string;
    score: number;
}

const candidates: Candidate[] = [];

fs.createReadStream('candidates.csv')
    .pipe(csv())
    .on('data', (data) => {
        const candidate: Candidate = {
            url: data.project,
            score: Math.floor(Math.random() * 100) + 1
        };
        candidates.push(candidate);
    })
    .on('end', () => {
        candidates.sort((a, b) => b.score - a.score);
        fs.writeFileSync('results.json', JSON.stringify(candidates, null, 2));
        console.log(`Results written to results.json`);
    });
    