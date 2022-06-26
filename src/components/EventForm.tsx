import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import { Moment } from "moment";
import React, { FC, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { formatDate } from "../utils/date";
import { rules } from "../utils/rules";
import { IEvent } from "./models/IEvent";
import { IUser } from "./models/IUser";

interface EventFormProps {
    guests: IUser[];
    submit: (event: IEvent) => void
}

const EventForm: FC<EventFormProps> = (props) => {
    const [event, setEvent] = useState<IEvent>({
        author: "",
        guest: "",
        date: "",
        description: "",
        
    } as IEvent);

const {user} = useTypedSelector(state => state.auth)

    const selectDate =(date: Moment | null) => {
        if(date) {
             setEvent({...event,date:formatDate(date.toDate())})
        }
       
    }
    const submitForm = ()=> {
        props.submit({...event, author: user.username})
       
    }
    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Description"
                name="username"
                rules={[rules.required("Please enter your event")]}
            >
                <Input value={event.description} onChange={e => setEvent({...event, description: e.target.value})} />
            </Form.Item>
            <Form.Item
                label="Дата события"
                name="date"
                // rules={[rules.required('Date'), rules.isDateAfter("Нельзя создать событие в прошлом")]}
            >
                <DatePicker
                onChange={(date) => selectDate(date)}
                />
            </Form.Item>
            <Form.Item
                label="Выберите гостя"
                name="guest"
                rules={[rules.required("Call guests")]}
            >
                <Select
                    onChange={(guest: string) => setEvent({ ...event, guest })}
                >
                    {props.guests.map(guest => (
                        <Select.Option
                            key={guest.username}
                            value={guest.username}
                        >
                            {guest.username}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>
            <Row justify="end">
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Создать
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;
