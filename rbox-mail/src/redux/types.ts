export interface Email {
    id: number;
    fromName: string;
    fromEmail: string;
    toName: string;
    toEmail: string;
    cc: string | null;
    bcc: string | null;
    threadId: number;
    messageId: string;
    inReplyTo: string;
    references: string;
    subject: string;
    body: string;
    isRead: boolean;
    folder: string;
    uid: number;
    sentAt: string;
    archivedAt: string | null;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  }
  export interface ReplyEmailResponse {
    status: number;
    message: string;
    // other fields depending on the actual response structure
  }
  
  export interface SingleEmail {
    id: number;
    fromName: string;
    fromEmail: string;
    toName: string;
    toEmail: string;
    cc: string[];       
    bcc: string[];        
    threadId: number;
    messageId: string;
    inReplyTo: string | null;
    references: string | null;
    subject: string;
    body: string;
    isRead: boolean;
    folder: string;
    uid: number;
    sentAt: string;
    archivedAt: string | null;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string | null;
  }
  
  export interface SingleEmailResponse {
    status: number;
    data: SingleEmail[]; // An array of SingleEmail objects for a thread
  }
  
  export interface EmailResponse {
    status: number;
    data: Email[];
  }
  

  
  export interface ResetResponse {
    status: number;
    data: string;
  }
  