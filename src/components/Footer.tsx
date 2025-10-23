const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="font-playfair text-xl font-bold mb-2">Premier Properties</p>
        <p className="text-primary-foreground/80 text-sm">
          © {new Date().getFullYear()} Premier Properties. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
