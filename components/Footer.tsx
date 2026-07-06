import EslimiDivider from "./EslimiDivider";

export default function Footer() {
  return (
    <footer className="bg-cream px-6 py-10">
      <EslimiDivider />
      <div className="text-center">
        <p className="font-nastaligh text-amber-dark text-xl md:text-2xl">
          صادق و ملیکا
        </p>
        <p className="text-espresso/40 text-xs mt-2">
          ۱۴۰۵ &mdash; با عشق
        </p>
      </div>
    </footer>
  );
}
