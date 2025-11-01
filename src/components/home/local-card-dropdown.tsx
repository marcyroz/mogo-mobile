import { EllipsisVertical, Heart, Trash2 } from "lucide-react-native";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Text } from "../ui/text";

interface LocalCardDropdownProps {
    favorite: boolean;
}
export default function LocalCardDropdown({ favorite }: LocalCardDropdownProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="p-0 w-auto">
                    <EllipsisVertical />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top">
                <DropdownMenuItem>
                    <Heart color={favorite ? "#DE4A4A" : undefined} />
                    <Text>{favorite ? "Desfavoritar" : "Favoritar"}</Text>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Trash2 />
                    <Text>Remover do histórico</Text>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

