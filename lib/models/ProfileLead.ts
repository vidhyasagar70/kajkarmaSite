import mongoose, { Schema, Document } from 'mongoose';

export interface IProfileLead extends Document {
    name: string;
    email: string;
    phoneNumber: string;
    createdAt: Date;
}

const ProfileLeadSchema = new Schema<IProfileLead>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export const ProfileLead = mongoose.models.ProfileLead || mongoose.model<IProfileLead>('ProfileLead', ProfileLeadSchema);
