"use client";

import { TUserResponse } from "@/lib/type";
import { createContext } from "react";

export const userContext = createContext<TUserResponse | null>(null);
