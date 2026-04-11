import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Parceiros() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/sobre");
  }, [router]);
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: { destination: "/sobre", permanent: true },
  };
}
