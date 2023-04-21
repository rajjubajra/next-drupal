type sporthome = {
  "type": string,
  "id": string,
  "links": {
    "self": {
      "href": string
    }
  },
  "attributes": {
    "drupal_internal__nid": number,
    "drupal_internal__vid": number,
    "langcode": string,
    "revision_timestamp": string,
    "revision_log": null,
    "status": boolean,
    "title": string,
    "created": string,
    "changed": string,
    "promote": boolean,
    "sticky": boolean,
    "default_langcode": boolean,
    "revision_translation_affected": null,
    "path": {
      "alias": null,
      "pid": null,
      "langcode": string
    },
    "body": string
  },
  "relationships": {
    "node_type": {
      "data": {
        "type": string,
        "id": string,
        "meta": {
          "drupal_internal__target_id": string
        }
      },
      "links": {
        "related": {
          "href": string
        },
        "self": {
          "href": string
        }
      }
    },
    "revision_uid": {
      "data": {
        "type":string,
        "id": string,
        "meta": {
          "drupal_internal__target_id": number
        }
      },
      "links": {
        "related": {
          "href": string
        },
        "self": {
          "href": string
        }
      }
    },
    "uid": {
      "data": {
        "type": string,
        "id": string,
        "meta": {
          "drupal_internal__target_id": number
        }
      },
      "links": {
        "related": {
          "href": string
        },
        "self": {
          "href": string
        }
      }
    },
    "field_media_image": {
      "data": {
        "type": string,
        "id": string,
        "meta": {
          "drupal_internal__target_id": number
        }
      },
      "links": {
        "related": {
          "href": string
        },
        "self": {
          "href": string
        }
      }
    }
  }
}


type Post = {
  "userId": number,
  "id": number,
  "title": string,
  "body": string
}


type User = {
  "id": number,
  "name": sting,
  "username": string,
  "email": string,
  "address": {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": {
      "lat": string,
      "lng": string
    }
  },
  "phone": string,
  "website": string,
  "company": {
    "name": string,
    "catchPhrase": string,
    "bs": string
  }
}