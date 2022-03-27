import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Button,
  FormControl,
  Heading,
  FormLabel,
  Input,
  Text,
  Link,
  Icon
} from "@chakra-ui/react";

interface TherapyCardProps {
  cardTitle: string;
  videoSource: string;
  therapyTargets: React.ReactNode;
}
