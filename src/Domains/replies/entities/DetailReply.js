class DetailReply {
  constructor(payload) {
    this._verifyPayload(payload);

    const {
      id, commentId, content, date, username, isDelete,
    } = payload;

    this.id = id;
    this.commentId = commentId;
    this.content = content;
    this.date = date;
    this.username = username;
    this.isDelete = isDelete;
  }

  _verifyPayload(payload) {
    const {
      id, commentId, content, date, username, isDelete,
    } = payload;

    if (
      !id
      || !commentId
      || !content
      || !date
      || !username
      || isDelete === undefined
    ) {
      throw new Error('DETAIL_REPLY.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (
      typeof id !== 'string'
      || typeof commentId !== 'string'
      || typeof content !== 'string'
      || typeof date !== 'string'
      || typeof username !== 'string'
      || typeof isDelete !== 'boolean'
    ) {
      throw new Error('DETAIL_REPLY.NOT_MEET_DATA_TYPE_SPESIFICATION');
    }
  }
}

module.exports = DetailReply;
