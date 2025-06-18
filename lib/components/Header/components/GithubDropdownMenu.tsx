import { Button } from "@/ui/button";
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from "@/ui/dropdown-menu";
import { ChevronDown, EllipsisVertical, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

export const GithubDropdownMenu = ({ ghRepoName }: { ghRepoName: string }) => {
  const isSmall = useBreakpoint("(max-width: 640px)");

  return (
    <DropdownMenu>
      {!isSmall && (
        <DropdownMenuTrigger asChild>
          <Button
            variant="outlineBrand"
            className="max-sm:hidden text-brand bg-transparent border-brand focus:bg-[#2D2D2D] hover:bg-[#2D2D2D] hover:text-brand focus-visible:shadow-none mr-4 px-3 h-[32px]"
          >
            Github&nbsp;
            <ChevronDown height={20} />
          </Button>
        </DropdownMenuTrigger>
      )}

      {isSmall && (
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="sm:hidden text-brand bg-transparent border-brand focus:bg-[#2D2D2D] hover:bg-[#2D2D2D] hover:text-brand focus-visible:shadow-none mr-4 px-3 h-[32px] sm-hidden"
          >
            <EllipsisVertical />
          </Button>
        </DropdownMenuTrigger>
      )}

      <DropdownMenuContent className="bg-[#242424] mt-1 p-4 border-none text-white min-w-[315px]">
        <DropdownMenuItem
          onSelect={() => window.open(`https://github.com/FluffyLabs/${ghRepoName}/issues/new`, "_blank")}
          className="pl-3 py-3 flex items-start justify-between hover:bg-[#2D2D2D] focus:bg-[#2D2D2D] focus:text-white"
        >
          <div className="flex flex-col">
            <span className="text-sm font-medium mb-1">Report an issue or suggestion</span>
            <span className="text-xs text-muted-foreground">Go to the issue creation page</span>
          </div>
          <ExternalLink className="text-brand-dark dark:text-brand" size={16} />
        </DropdownMenuItem>

        <DropdownMenuItem
          onSelect={() => window.open(`https://github.com/FluffyLabs/${ghRepoName}`, "_blank")}
          className="pl-3 py-3 flex items-start justify-between hover:bg-[#2D2D2D] focus:bg-[#2D2D2D] focus:text-whit"
        >
          <div className="flex flex-col">
            <span className="text-sm font-medium mb-1">Star us on Github to show support</span>
            <span className="text-xs text-muted-foreground">Visit our Github</span>
          </div>
          <ExternalLink className="text-brand-dark dark:text-brand" size={16} />
        </DropdownMenuItem>

        <DropdownMenuItem
          onSelect={() => window.open(`https://github.com/FluffyLabs/${ghRepoName}/fork`, "_blank")}
          className="pl-3 py-3 flex items-start justify-between hover:bg-[#2D2D2D] focus:bg-[#2D2D2D] focus:text-whit"
        >
          <div className="flex flex-col">
            <span className="text-sm font-medium mb-1">Fork & contribute</span>
            <span className="text-xs text-muted-foreground pt-1">Opens the fork creation page</span>
          </div>
          <ExternalLink className="text-brand-dark dark:text-brand" size={16} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
function useBreakpoint(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
