/// <reference types="react" />
export declare type ExtendedFile = {
    file: File;
    id: string;
};
export interface SingleFileProps {
    file: ExtendedFile;
    onDeleteIconClick: (fileId: string) => void;
    onPreviewFileIconClick?: (file: ExtendedFile) => void;
}
declare const SingleFile: ({ file, onDeleteIconClick, onPreviewFileIconClick, }: SingleFileProps) => JSX.Element;
export default SingleFile;
