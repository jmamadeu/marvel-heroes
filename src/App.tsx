import { QueryClientProvider } from "react-query";
import { Footer } from "~/components/molecules/footer";
import { Home } from "~/pages/home";
import { queryClient } from "~/services/react-query";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
