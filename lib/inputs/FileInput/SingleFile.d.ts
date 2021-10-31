/// <reference types="react" />
export declare type ExtendedFile = {
    file: File;
    id: string;
};
export interface SingleFileProps {
    file: ExtendedFile;
    onDeleteIconClick: (fileId: string) => void;
}
declare const SingleFile: ({ file, onDeleteIconClick }: SingleFileProps) => JSX.Element;
export default SingleFile;
