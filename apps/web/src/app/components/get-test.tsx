"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { cn } from "~/lib/utils";

interface GetTestResponse {
  message: string;
}

const GetTest = () => {
  const [test, setTest] = useState<string>("");

  useEffect(() => {
    const fetchTest = async () => {
      const response = await fetch("http://localhost:3001/test");
      const data: GetTestResponse = await response.json();
      setTimeout(() => {
        setTest(data.message);
      }, 3000);
    };
    fetchTest();
  }, []);

  return (
    <div>
      <Card>
        <CardHeader>
          <h1
            className={cn(
              "text-xl text-yellow-500",
              test !== "" && "text-green-500",
            )}
          >
            Get Test
          </h1>
        </CardHeader>
        <CardContent>
          <p>{test}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default GetTest;
