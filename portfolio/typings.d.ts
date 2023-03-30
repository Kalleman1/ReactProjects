//Definerer de forskellige types

import { type } from "os";

//Default for sanity, det vil altid have disse properties
interface SanityBody {
    _createdAt: string;
    _id: string;
    rev: string;
    _updatedAt: string;
}

interface Image{
    _type: "image"
    asset: {
        _ref: string;
        _type: "reference";
    };
}

//Interface til PageInfo som extender SanityBody
export interface PageInfo extends SanityBody{
 _type: "pageInfo";
 address: string;
 backgroundInformation: string;
 email: string;
 name: string;
 phoneNumber: string;
 profilePic: Image;
}