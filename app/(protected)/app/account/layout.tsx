import { Header } from "@/app/(protected)/app/account/_components/header";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen bg-slate-900">
      <Header />
      <h1 className="text-3xl flex font-light justify-center items-center text-white mt-10">
        Account Center
      </h1>
      <div className="flex flex-col max-w-[1000px] mx-auto">{children}</div>
    </div>
  );
}
