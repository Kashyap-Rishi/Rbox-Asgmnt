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
  
  export interface EmailResponse {
    status: number;
    data: Email[];
  }
  
  export interface SingleEmailResponse {
    status: number;
    data: Email;
  }
  
  export interface ResetResponse {
    status: number;
    data: string;
  }
  