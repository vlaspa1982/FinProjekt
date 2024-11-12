import React, { useEffect, useState } from 'react'
import { CompanyCashFlow } from '../../company';
import { useOutletContext } from 'react-router-dom';
import { getCashFlow } from '../../api';
import RatioList from '../RatioList/RatioList';
import Table from '../Table/Table';
import Spinner from '../Spinner/Spinner';

type Props = {}
const config = [
    {
      label: "Date",
      render: (company: CompanyCashFlow) => company.date,
    },
    {
      label: "Operating Cashflow",
      render: (company: CompanyCashFlow) => company.operatingCashFlow,
    },
    {
      label: "Investing Cashflow",
      render: (company: CompanyCashFlow) =>
        company.netCashUsedForInvestingActivites,
    },
    {
      label: "Financing Cashflow",
      render: (company: CompanyCashFlow) =>
        company.netCashUsedProvidedByFinancingActivities,
    },
    {
      label: "Cash At End of Period",
      render: (company: CompanyCashFlow) => company.cashAtEndOfPeriod,
    },
    {
      label: "CapEX",
      render: (company: CompanyCashFlow) => company.capitalExpenditure,
    },
    {
      label: "Issuance Of Stock",
      render: (company: CompanyCashFlow) => company.commonStockIssued,
    },
    {
      label: "Free Cash Flow",
      render: (company: CompanyCashFlow) => company.freeCashFlow,
    },
  ];
  
const CashFlowStatement = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [cashFlowStatement, setCashFlowStatement] = useState<CompanyCashFlow[]>(); 
    useEffect(() => {
        const getData = async () => {
          const value =  await getCashFlow(ticker!);
          setCashFlowStatement(value?.data);
        };
        getData();
    },[]);
  return (
    <>
      {cashFlowStatement? <Table data={cashFlowStatement} config={config} /> :  <Spinner />}
    </>
  )
}

export default CashFlowStatement