import { useEffect, useState } from 'react'
import { CompanyProfile } from '../../company';
import { useParams } from 'react-router-dom';
import { getCompanyProfile } from '../../api';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../../Components/Tile/Tile';
import CompFinder from '../../Components/CompFinder/CompFinder';

interface Props { }

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();
  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    }
    getProfileInit();
  }, [ticker]);
  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">

          <Sidebar />

          <CompanyDashboard ticker={ticker!}>
            <Tile title="Company Name" subTitle={company.companyName}></Tile>
            <Tile title="Proce" subTitle={company.price.toString()}></Tile>
            <Tile title="Sector" subTitle={company.sector}></Tile>
            <Tile title="DCF" subTitle={company.dcf.toString()}></Tile>
             <CompFinder ticker={company.symbol} />

            <p className="bg-white shadow rounded text-medium text-gray-900 p-3 mt-1 m-4">
              {company.description}
            </p>
          </CompanyDashboard>

        </div>
      ) : (
        <div>Company not found!</div>
      )}
    </>
  )
}

export default CompanyPage