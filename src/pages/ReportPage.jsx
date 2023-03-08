import React from 'react';
import { ReportsStat } from 'components/Reports/ReportsStat/ReportsStat';
// import { ReportsNav } from 'components/Reports/ReportsNav/ReportsNav';
import { WraperBg } from './ReportPage.styled';
import { BarChartComponent } from 'components/BarChartComponent/BarChartComponent';

export function ReportPage() {
  return (
    <WraperBg>
      {/* <ReportsNav /> */}
      <ReportsStat />
      <BarChartComponent />
    </WraperBg>
  );
}

export default ReportPage;
