import { BellRingIcon } from "lucide-react";
import React from "react";

import { Button } from "../ui/button";

export const NotificationButton = () => {
  return (
    <Button variant={"ghost"}>
      <BellRingIcon className="h-5 w-5" />
    </Button>
  );
};
