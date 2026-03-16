export interface FileIconProps {
  /** File extension (e.g. "pdf", "jpg"). Used directly if provided. */
  file?: string;
  /** Full filename (e.g. "report.pdf"). Extension is extracted automatically. Ignored if `file` is set. */
  filename?: string;
  /** Icon size variant. */
  size?: 'medium' | 'large';
}

export declare const FileIcon: React.FC<FileIconProps>;
