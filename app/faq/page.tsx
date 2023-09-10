import { soloMarks, teamMarks } from "@/constants";

async function Page(){
   return (
    <div className="flex justify-center items-center p-4">
      <div className="max-w-2xl mx-auto p-6 rounded-lg shadow text-light-2">
        <h1 className="text-2xl font-semibold mb-4">Walk To Win 2023 - Rules & Regulations</h1>

        <h2 className="text-xl font-semibold mb-2">Objectives</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Motivate employees to maintain their health prior to the Annual Medical checkup</li>
          <li>Motivate employees to focus more on their health</li>
          <li>Motivate employees who are finding it difficult to maintain a healthy lifestyle</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Rules & Regulations</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>The competition will be held for two weeks from the announced date (11 September)</li>
          <li>The competition will be held in two categories "Team" & "Individual"</li>
          <li>Each team category requires four (4) Members</li>
          <li>It is mandatory to have one(1) female member in each team</li>
          {/* Add more rules here */}
        </ul>

        <h2 className="text-xl font-semibold mb-2">Point System</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Team Marks</h3>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Steps Count</th>
                <th className="px-4 py-2">Points</th>
              </tr>
            </thead>
            <tbody>
              {teamMarks.map(([stepsCount, points], index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{stepsCount}</td>
                  <td className="px-4 py-2">{points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Solo Marks</h3>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Steps Count</th>
                <th className="px-4 py-2">Points</th>
              </tr>
            </thead>
            <tbody>
              {soloMarks.map(([stepsCount, points], index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{stepsCount}</td>
                  <td className="px-4 py-2">{points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


export default Page;