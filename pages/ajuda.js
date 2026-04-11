import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Ajuda() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/contato");
  }, [router]);
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: { destination: "/contato", permanent: true },
  };
}

