import React from 'react';
import styles from './FileCard.module.scss'
import {getExtensionFromFileName} from "@/utils/getExtensionFromFileName";
import {getColorByExtension} from "@/utils/getColorByExtension";
import {FileTextOutlined} from "@ant-design/icons";
import {isImage} from "@/utils/isImage";

interface FileCardProps {
    filename: string;
    originalName: string;
}

const FileCard: React.FC<FileCardProps> = ({filename, originalName}) => {

    const ext = getExtensionFromFileName(filename);
    const imageUrl =
        ext && isImage(ext) ? "http://localhost:7777/uploads/" + filename : "";

    const color = getColorByExtension(ext);
    const classColor = styles[color];

    return (
        <div className={styles.root}>
            <div className={styles.icon}>
                <i className={classColor}>{ext}</i>
                {isImage(ext) ? (
                    <img className={styles.image} src={imageUrl} alt="File" />
                ) : (
                    <FileTextOutlined />
                )}
            </div>
            <span>{originalName}</span>
        </div>
    );
};

export default FileCard;