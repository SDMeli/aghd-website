import EslimiDivider from "./EslimiDivider";

export default function Footer() {
  return (
    <footer className="bg-cream pb-10 px-6">
      <EslimiDivider />
      <div className="text-center">
        <p className="font-nastaligh text-gold text-xl md:text-2xl">
          صادق و ملیکا
        </p>
        <p className="text-espresso/40 text-xs mt-2">
          ۱۴۰۵ &mdash; با عشق
        </p>
      </div>
    </footer>
  );
}
