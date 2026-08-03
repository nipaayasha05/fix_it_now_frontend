import PaymentSuccessPage from "../../_components/payment/paymentSuccessPage";

type Props = {
  searchParams: Promise<{
    session_id?: string;
  }>;
};

export default async function SuccessPage({ searchParams }: Props) {
  const { session_id } = await searchParams;

  // console.log(session_id);

  return (
    <div>
      <PaymentSuccessPage />
    </div>
  );
}
