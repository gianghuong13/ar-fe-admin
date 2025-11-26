import { ReactNode } from 'react';
import Typography from './Typography';

interface TabProps {
  label: string;
  children: ReactNode;
}

const Tab: React.FC<TabProps> = ({ label, children }) => {
  return (
    <div>
      <div className="mx-auto mt-5 w-fit rounded-t-md bg-[#c7e5e5] px-9 py-0.5">
        <Typography variant="callout">{label}</Typography>
      </div>

      <div className="border-y-2 border-[#C7E5E5] py-2 text-center">
        {children}
      </div>
    </div>
  );
};

export default Tab;
