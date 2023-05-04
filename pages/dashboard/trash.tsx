import React from 'react';
import {FileItemDto} from "@/api/dto/files.dto";
import {GetServerSidePropsContext, NextPage} from "next";
import {FileList} from "@/components/FileList";
import Layout from "@/layouts/Layout";
import {checkAuth} from "@/utils/checkAuth";
import * as Api from "@/api";
import DashboardLayout from "@/layouts/DashboardLayout";
import {Files} from "@/modules/Files";

interface Props {
    items: FileItemDto[];
}

const DashboardTrash: NextPage<Props> = ({items}) => {

    return (
        <DashboardLayout>
            <Files items={items} />
        </DashboardLayout>
    );
};

// @ts-ignore
DashboardTrash.getLayout = (page: React.ReactNode) => {
    return <Layout title="Dashboard / Фотографии">{page}</Layout>
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const authProps = await checkAuth(ctx)

    if ("redirect" in authProps) {
        return authProps;
    }

    try {
        const items = await Api.files.getAll("trash");

        return {
            props: {
                items,
            }
        }
    } catch (e) {
        console.log(e)
        return {
            props: {
                items: [],
            }
        }
    }

}

export default DashboardTrash;