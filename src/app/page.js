import Navbar from "@/components/Navbar";
import ReduxProvider from "@/components/ReduxProvider";
import TableContainer from "@/components/TableContainer";

export default function Home() {
  return (
    <ReduxProvider>
      <main className="font-poppins">
        <Navbar />
        <TableContainer />
      </main>
    </ReduxProvider>
  );
}
