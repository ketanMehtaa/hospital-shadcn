import Image from 'next/image';
import Header from '../components/Header';
import Startcarousel from '@/components/Startcarousel';
import CalEmbed from '../components/CalEmbed.js';
export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Startcarousel />
        <div>
          <h2 className="text-2xl font-semibold text-center my-4 md:text-3xl lg:text-4xl">
            Book Your Appointment for Online or Offline Consultation.
          </h2>
          <CalEmbed />
        </div>
      </main>
    </>
  );
}
