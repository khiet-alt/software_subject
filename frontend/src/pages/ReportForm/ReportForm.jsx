import React from "react";

const thClass =
  "px-4 py-4 text-left bg-blue-900 text-white text-sm font-medium";
const tdClass = "px-4 py-8 border-t border-b border-gray-300 text-sm";
const trClass = "border-gray-300";

const data = [
  {id: '1', type: 'A', revenue: '36.000$', rate: '1.2%'},
  {id: '2', type: 'C', revenue: '128.999$', rate: '5.6%'},
  {id: '3', type: 'A', revenue: '92.123$', rate: '3.5%'},
  {id: '4', type: 'B', revenue: '50.000$', rate: '90%'},
  {id: '5', type: 'C', revenue: '43.040$', rate: '75%'},
]

const RowComponent = ({ params }) => {
  return (
    <tr className={trClass}>
      <td className={tdClass}>{params.id}</td>
      <td className={tdClass}>{params.type}</td>
      <td className={tdClass}>{params.revenue}</td>
      <td className={tdClass}>{params.rate}</td>
    </tr>
  );
};

function StandardTable() {
  return (
    <table className="w-full table-auto rounded-sm">
      <thead>
        <h4 class="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600 w-full font-bold m-px">
          Báo cáo doanh thu theo tháng
        </h4>

        <tr>
          <th className={thClass}>STT</th>
          <th className={thClass}>Loại phòng</th>
          <th className={thClass}>Doanh thu</th>
          <th className={thClass}>Tỉ lệ</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <RowComponent key={item.id} params={item} />
        ))}
      </tbody>
    </table>
  );
}

export default StandardTable;
