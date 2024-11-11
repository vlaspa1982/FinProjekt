import { CompanyKeyMetrics } from '../../company'
import RatioList from '../../Components/RatioList/RatioList'
import Table from '../../Components/Table/Table'
import { testIncomeStatementData } from '../../Components/Table/testData'

type Props = {}

const tableConfig = [
  
    {
      label: "Market Cap",
      render: (company: any) => company.marketCapTTM,
      subTitle: "Total value of all a company's shares of stock",
    },
  
]
const DesignGuide = (props: Props) => {
  return (
    <>
        <RatioList data={ testIncomeStatementData} config={tableConfig}/>
        <Table />
    </>
  )
}

export default DesignGuide