import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth"
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaDollarSign, FaItchIo, FaUsers, } from "react-icons/fa";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()
  const { data: stats = {} } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin-stats');
      return res.data
    }

  })

  const { data: chartData = [] } = useQuery({
    queryKey: ['order-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/order-stats');
      return res.data
    }
  })



  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  }

  const piechartData = chartData.map(data => {
    return {name: data.category, value: data.revenue}
  })



  return (
    <div>
      <h2 className="text-4xl w-96 p-5 text-white m-auto text-center font-bold bg-gradient-to-r rounded-xl from-[#d400fff1] to-[rgba(#FCDBFF) 100%)]"> This is admin home</h2>
      <p className="text-center w-80 m-auto my-5 font-bold bg-gradient-to-r rounded-xl from-[red] to-[rgba(#FCDBFF) 100%)]">
        <span>Admin Name: </span>
        {
          user?.displayName ? user.displayName : 'back'
        }
      </p>
      <div className=" flex lg:flex-row flex-col gap-4 text-white justify-items-center w-full shadow">

        <div className="stat transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300  shadow-md bg-gradient-to-r rounded-lg from-[blue] to-[rgba(#FCDBFF) 100%)]">
          <div className="stat-figure text-secondary ">
            <FaDollarSign className="text-4xl"></FaDollarSign>
          </div>
          <div className="stat-title text-white">Revenue</div>
          <div className="stat-value text-white">$ {stats?.revenue}</div>
          <div className="stat-desc text-white">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat shadow-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 shadow-zinc-800 bg-gradient-to-r rounded-lg from-[red] to-[rgba(#FCDBFF) 100%)]">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-4xl"></FaUsers>
          </div>
          <div className="stat-title text-white"> Users</div>
          <div className="stat-value">{stats?.users}</div>
          <div className="stat-desc text-white">↗︎ 400 (22%)</div>
        </div>

        <div className="stat transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 shadow-md shadow-zinc-800 bg-gradient-to-r rounded-lg from-[#BB34F5] to-[rgba(#FCDBFF) 100%)]">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current "><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
          </div>
          <div className="stat-title text-white">Orders</div>
          <div className="stat-value">{stats?.orders}</div>
          <div className="stat-desc text-white">↘︎ 90 (14%)</div>
        </div>
        <div className="stat shadow-lg shadow-zinc-800 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 bg-gradient-to-r rounded-lg from-[#7df3f3] to-[rgba(#FCDBFF) 100%)]">
          <div className="stat-figure text-secondary">
            <FaItchIo className="text-3xl" />
          </div>
          <div className="stat-title text-white">Menu Items</div>
          <div className="stat-value">{stats?.menuItems}</div>
          <div className="stat-desc text-white">↘︎ 90 (14%)</div>
        </div>

      </div>
      <div className="flex lg:flex-row flex-col my-10 gap-5">
        <div className="lg:w-1/2 w-52">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
              {piechartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>

        </div>
        <div className="lg:w-1/2 ">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={piechartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend></Legend>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  )
}

export default AdminHome
