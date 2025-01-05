import { useMedia } from "react-use"
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { Drawer, DrawerContent, DrawerTitle } from "./ui/drawer";



interface ResponsiveModalProps {
    children: React.ReactNode;
    open: boolean;
    onOpenChange: (open: boolean) => void
}

export const ResponsiveModal = ({ children, open, onOpenChange }: ResponsiveModalProps) => {

    const isDesktop = useMedia("(min-width: 1024px)", true);
    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={onOpenChange} modal={true}>
                <DialogTitle></DialogTitle>
                <DialogContent className=" w-full sm:max-w-lg p-0 border-none overflow-y-auto hide-scrollbar max-h-[85vh] bg-[#F5F5F5]">
                    {children}
                </DialogContent>

            </Dialog>
        )
    }
    return (
        <Drawer open={open} onOpenChange={onOpenChange} modal={true}>
            <DrawerContent >
                <DrawerTitle></DrawerTitle>
                <div className=" overflow-y-auto hide-scrollbar max-h-[85vh] bg-[#F5F5F5] ">
                    {children}
                </div>
            </DrawerContent>

        </Drawer>
    )
}