function reverseList(head){
    var pre=null,tmp=null;
    var cur=head;
    while(cur){
        tmp=cur.next;
        cur.next=pre;
        pre=cur;
        cur=tmp;
    }
    return pre;
}