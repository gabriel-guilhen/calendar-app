import EventForm from '@/components/forms/EventForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

export default function page() {
  return (
    <Card className="max-w-md m-auto">
      <CardHeader>
        <CardTitle>New Event</CardTitle>
        <CardContent>
          <EventForm />
        </CardContent>
      </CardHeader>
    </Card>
  );
}
