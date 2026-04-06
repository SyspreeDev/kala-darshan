import KalaDarshanLandingPageOriginal from "../../imports/KalaDarshanLandingPage-1/KalaDarshanLandingPage-1-1135";

export default function KalaDarshanLandingPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <KalaDarshanLandingPageOriginal />
      <style>{`
        /* Fix navigation alignment */
        [data-name="Kala Darshan - Landing Page"] {
          min-height: 100vh;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}
