import React from 'react';
import { motion } from 'motion/react';

export interface TableColumn {
  key: string;
  header: string;
}

export interface TableProps {
  columns: TableColumn[];
  data: Record<string, React.ReactNode>[];
}

export const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-2xl border border-white/15 bg-slate-900/60 backdrop-blur-2xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm font-sans">
          <thead className="bg-white/5 border-b border-white/10 text-xs font-bold uppercase tracking-wider text-cyan-300">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="px-6 py-4">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-slate-200">
            {data.map((row, idx) => (
              <motion.tr 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="hover:bg-white/5 transition-colors"
              >
                {columns.map((col) => (
                  <td key={col.key} className="px-6 py-4">
                    {row[col.key]}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
