import Image from "next/image";
import "../../Dashboardfinal/Admind/Chart.css";
const Chart = ({ type, value }: { type: string; value: number }) => {
  const date = new Date();

  return (
    <div className="rounded-2xl bg gb min-w-[130px]  p-4 flex-1 ">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2025/6
        </span>
        <Image width={20} height={20} src="/image.png" alt="search" />
      </div>
      <h3 className="text-2xl font-semibold my-4">{value}</h3>
      <h6 className="capitalize text-sm font-medium text-gray-500">{type}</h6>
    </div>
  );
};

export default Chart;
