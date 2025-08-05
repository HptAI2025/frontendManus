import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/hooks/useLanguage";

// Layout Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Pages
import Home from "@/pages/Home";
import Enterprise from "@/pages/Enterprise";
import Pricing from "@/pages/Pricing";
import Customers from "@/pages/Customers";
import About from "@/pages/About";
import Careers from "@/pages/Careers";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";
import Docs from "@/pages/Docs";
import Login from "@/pages/Login";
import GetStarted from "@/pages/GetStarted";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/enterprise" component={Enterprise} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/customers" component={Customers} />
      <Route path="/about-us" component={About} />
      <Route path="/careers" component={Careers} />
      <Route path="/blog/:id" component={BlogPost} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route path="/docs" component={Docs} />
      <Route path="/login" component={Login} />
      <Route path="/get-started" component={GetStarted} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Layout>
            <Router />
          </Layout>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
