import React from 'react';
import {Button, notification, Upload, UploadFile} from "antd";
import {CloudUploadOutlined} from "@ant-design/icons";
import styles from '@/styles/Home.module.scss'
import * as Api from '@/api'

const UploadButton: React.FC = () => {
    const [fileList, setFileList] = React.useState<UploadFile[]>([]);

    const onUploadSuccess = async (options: any) => {

        try {
            await Api.files.uploadFile(options);

            setFileList([]);

            window.location.reload();

        } catch (e) {
            notification.error({
                message: 'Ошибка!',
                description: 'Не удалось загрузить файл',
                duration: 2,
            })
        }

    }

    return (
        <Upload
            customRequest={onUploadSuccess}
            fileList={fileList}
            onChange={({ fileList }) => setFileList(fileList)}
            className={styles.upload}
        >
            <Button type="primary" icon={<CloudUploadOutlined />} size="large">
                Загрузить файл
            </Button>
        </Upload>
    );
};

export default UploadButton;