import { TooltipProvider } from '@/components/ui/tooltip';
import AppBar from './components/AppBar';
import { ThemeProvider } from './components/ThemeProvider';
import { Toaster } from './components/ui/toaster';
import Routes from './routes';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (e.shiftKey) {
                e.preventDefault(); // Prevents shift-click from focusing elements
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick); // Clean up
        };
    }, []);

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <TooltipProvider>
                <AppBar />
                <Routes />
                <Toaster />
            </TooltipProvider>
        </ThemeProvider>
    );
}

export default App;
