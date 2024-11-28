"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis } from "@/components/ui/pagination";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function VMPage() {
  const list = [
    { title: "Card 1", description: "Description 1", content: "Content 1", footer: "Footer 1" },
    { title: "Card 2", description: "Description 2", content: "Content 2", footer: "Footer 2" },
    // ... more data
  ];

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0); // 当前页

  const startIndex = currentPage * itemsPerPage; // 当前页的起始索引
  const endIndex = startIndex + itemsPerPage;
  const currentItems = list.slice(startIndex, endIndex);

  const totalPages = Math.ceil(list.length / itemsPerPage); // 总页数

  return (
    <div className="container mx-auto p-4">
      <Label>VM Page</Label>
      <div className="py-4 flex justify-end gap-4">
        <Select>
          <SelectTrigger className="w-[100px] h-[30px]">
            <SelectValue placeholder="核心数量" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1h">1</SelectItem>
            <SelectItem value="2h">2</SelectItem>
            <SelectItem value="4h ">4</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[80px] h-[30px]">
            <SelectValue placeholder="内存" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1g">1G</SelectItem>
            <SelectItem value="2g">2G</SelectItem>
            <SelectItem value="4g">4G</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-wrap gap-4">
        {currentItems.map((item, index) => (
          <Card key={index} className="w-[200px] justify-center">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{item.content}</p>
            </CardContent>
            <CardFooter>
              <Button className="h-[30px]">下单</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex justify-center py-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
