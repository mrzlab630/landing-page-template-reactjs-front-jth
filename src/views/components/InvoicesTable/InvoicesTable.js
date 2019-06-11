import React from 'react';
import { Table } from 'semantic-ui-react';

import downloadIcon from './../../../assets/download.svg';
import * as styles from './InvoicesTable.less';

const InvoicesTableRow = () => (
    <Table.Row>
        <Table.Cell className={styles.tableCell}>Apr 8</Table.Cell>
        <Table.Cell className={styles.tableCell}>Invoice for 03/04/2019-03/10/2019 - 4:00 hrs @ $11.00/hr</Table.Cell>
        <Table.Cell className={styles.tableCell}>$360.00</Table.Cell>
        <Table.Cell className={styles.lastCell}>
            <img className={styles.downloadIcon} src={downloadIcon} />
        </Table.Cell>
    </Table.Row>
);

const InvoicesTable = () => (
    <Table basic='very'>
        <Table.Header className={styles.tableHeaderWrapper}>
            <Table.HeaderCell className={styles.tableHeader}>Date</Table.HeaderCell>
            <Table.HeaderCell className={styles.tableHeader}>Description</Table.HeaderCell>
            <Table.HeaderCell className={styles.tableHeader}>Amount</Table.HeaderCell>
            <Table.HeaderCell className={styles.tableHeader} textAlign='right'>Invoice</Table.HeaderCell>
        </Table.Header>
        <Table.Body>
            <InvoicesTableRow />
            <InvoicesTableRow />
        </Table.Body>
    </Table>
);


InvoicesTable.propTypes = {

};

export default InvoicesTable;
