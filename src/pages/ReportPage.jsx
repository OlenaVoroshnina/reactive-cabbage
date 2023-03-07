import React from 'react';
import { ReportsStat } from 'components/Reports/ReportsStat/ReportsStat';
// import { ReportsNav } from 'components/Reports/ReportsNav/ReportsNav';
import { WraperBg } from './ReportPage.styled';

export  function ReportPage() {
  return (
    <WraperBg>
      {/* <ReportsNav /> */}
      <ReportsStat />
    </WraperBg>
  );
}

export default ReportPage;