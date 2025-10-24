const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="font-sans text-lg font-bold mb-2"></p>
        <p className="text-background/70 text-sm">
          © {new Date().getFullYear()} Dhruv Patel | REALTOR®. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
